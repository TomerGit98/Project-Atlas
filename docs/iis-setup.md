## IIS Setup steps for Project Atlas
*** All of the steps are done directly on the EC2 machine (Windows Server 2022) ***
---
# IIS install steps
I entered Server Manager -> Manage -> Add roles and feature -> Role-based or feature-based installation
In Server Roles I selected Web Server (IIS)
With ChatGPT recommendation (treated as my Senior directing me which options I need to set \ make sure they are ticked on the IIS Features):
Web Server  
- Common HTTP Features:
  - Static Content  
  - Default Document  
  - HTTP Errors  
- Security:
  - Request Filtering  
- Health and Diagnostics:
  - HTTP Logging  

Management Tools:
- IIS Management Console
---
# URL Rewrite + iisnode install
- URL Rewrite was downloaded and installed from the official Microsoft documentation.
- iisnode was installed from the original GitHub repository.
---
# Port 80 binding / Default Web Site stopped
I needed to create a new site - and bind it to port 80 (HTTP Inbound Rule in my EC2 Security Group)
It said something else was already occupying it
A little troubleshooting later -> Default website was on - and apparently it occupies port 80 -> shut it down
Managed to start Project-Atlas site
---
# Common errors I hit before success
**At first - I hit 403.14:**
- Apparently its default behavior (lesson learned)
- Means IIS is showing the site - but doesn't know what to show
**Then - I hit 404:**
- I was missing the web.config
- I created it - web.config.txt (Bad - Windows hid the extension - IIS could not read the file)
- Removed .txt from the end
**After that 500.19:**
- IIS read web.config - but it blocked a section of it
- Appreantly happened because handlers are locked on a server level
- Fixed it by running the following command:
```powershell
& "$env:windir\System32\inetsrv\appcmd.exe" unlock config /section:handlers
```
- App Pool Identity could not write logs - fixed with icacls command:
```powershell
icacls "C:\inetpub\project-atlas" /grant "IIS AppPool\Project-Atlas:(OI)(CI)(M)" /T
```

*** After all of that - server was up - showed /health JSON (from inside the EC2 machine and from my PC) ***