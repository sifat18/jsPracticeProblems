`Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
`

let defangIPaddr = function(address) {
// my solve-- 84 ms 
let a= address.split('.')
return a.join('[.]')

//alternative
return address.split('.').join('[.]')
//alternative 2 45ms
return address.replaceAll('.','[.]');

}