@echo off
echo Setting up QNotes as IIS Virtual Directory...
echo.
echo This will create a virtual directory under Default Web Site
echo so QNotes will be available at: http://localhost/QNotes/
echo.
pause
echo.
echo Running PowerShell command (requires Administrator)...
powershell -Command "Start-Process powershell -ArgumentList '-Command \"Import-Module WebAdministration; New-WebVirtualDirectory -Site \\\"Default Web Site\\\" -Name \\\"QNotes\\\" -PhysicalPath \\\"C:\\inetpub\\wwwroot\\QNotes\\\"; Write-Host \\\"QNotes virtual directory created successfully!\\\"; Write-Host \\\"Access your site at: http://localhost/QNotes/\\\"; Read-Host \\\"Press Enter to close\\\"\"' -Verb RunAs"
echo.
echo Done! If successful, your site should be available at:
echo http://localhost/QNotes/
echo.
pause
