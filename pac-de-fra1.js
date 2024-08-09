var tlds = [".dn42",".neo",".crxn"];

function FindProxyForURL(url, host){
  for(var i = 0; i < tlds.length; i++){
    if (dnsDomainIs(host,tlds[i])){
      return "PROXY de-fra1-dn42-proxy.sherpherd.top:8081";
    }
  }
}
