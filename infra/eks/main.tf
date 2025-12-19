module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "6.5.1"

  name = "${var.cluster_name}-vpc"
  cidr = "10.10.0.0/16"

  azs = ["eu-central-1a", "eu-central-1b"]
  private_subnets = ["10.10.1.0/24", "10.10.2.0/24"]
  public_subnets  = ["10.10.11.0/24", "10.10.12.0/24"]
  map_public_ip_on_launch = true
  enable_nat_gateway = true
  # For cost reasons I will use a single NAT gateway.
  # In a production multi-AZ setup - one_nat_gateway_per_az = true.
  single_nat_gateway = true

tags = {
    Project = "Project-Atlas"
  }
}

module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "21.10.1"

  name = "${var.cluster_name}"
  kubernetes_version = "1.32"

  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.public_subnets

  endpoint_public_access = true
  endpoint_public_access_cidrs = ["0.0.0.0/0"]
  endpoint_private_access = true
  enable_cluster_creator_admin_permissions = true

  eks_managed_node_groups = {
    default = {
      # Starting on 1.30, AL2023 is the default AMI type for EKS managed node groups
      instance_types = ["t3.medium"]

      min_size     = 1
      max_size     = 2
      desired_size = 1
    }
  }

  addons = {
    coredns                = {}
    kube-proxy             = {}
    vpc-cni                = { before_compute = true }
    eks-pod-identity-agent = { before_compute = true }
  }

}