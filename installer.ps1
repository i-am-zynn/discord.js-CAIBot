If (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]"Administrator")) {
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" $PSCommandArgs" -Verb RunAs
    Exit
}
write-output "-----------------------------------"
write-output "CAI-Bot Setup: Par Woomy4680-exe"
write-output "-----------------------------------"
Set-Location $PSScriptRoot
.\installer\install.exe 
write-output "Installation..."
write-output "De chocolatey"
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
write-output "De NodeJS"
RefreshEnv.cmd
choco upgrade nodejs -y 
.\installer\deps.exe 
choco upgrade -y choco-cleaner python2 visualstudio2017-workload-vctools
Set-Location $PSScriptRoot 
npm install 
Write-Output "OK"
pause 