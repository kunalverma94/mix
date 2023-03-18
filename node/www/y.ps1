$smo = 'Microsoft.SqlServer.Management.Smo.'  
$wmi = new-object ($smo + 'Wmi.ManagedComputer').  

# List the object properties, including the instance names.  
$Wmi  

# Enable the TCP protocol on the default instance.  
$uri = "ManagedComputer[@Name='<computer_name>']/ ServerInstance[@Name='MSSQLSERVER']/ServerProtocol[@Name='Tcp']"  
$Tcp = $wmi.GetSmoObject($uri)  
$Tcp.IsEnabled = $true  
$Tcp.Alter()  
$Tcp  

# Enable the named pipes protocol for the default instance.  
$uri = "ManagedComputer[@Name='<computer_name>']/ ServerInstance[@Name='MSSQLSERVER']/ServerProtocol[@Name='Np']"  
$Np = $wmi.GetSmoObject($uri)  
$Np.IsEnabled = $true  
$Np.Alter()  
$Np