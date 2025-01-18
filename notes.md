# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

### Creating the AWS Server Instance

I created a t2.micro server instance, because I was eligible for it due to free tier (it should be free?). Creating a server instance involves choosing a name, a key, and then setting security group settings - I allowed ssh, HTTP, and HTTPS traffic from anywhere. I then assigned an elastic IP address, which means the server can be stopped without losing the IP, and I can change what kind of instance is running without losing the IP. The server used a template provided by the class, I'll have to see after the class is over if I know how to do everything myself - I would like to make a web server as a personal project.

IPv4 of my server: `98.80.112.233`  
Command for ssh: `ssh -i [key pair file] ubuntu@98.80.112.233`

### Creating the Route53 DNS Name

[My server root domain](https://zacksayshi.click): `zacksayshi.click`

To create a Route53 DNS name, I had to first lease the domain name, and then create the hosted zone. Once the hosted zone was created with my root domain name, I could "create records" which provided the information regarding what IP address is mapped to what name. I created both the root domain name and any subdomains of the root domain (denoted by *) to route to the same IP address, the one associated with my server instance.

### Updating the Caddy File to use HTTPS

To create the web certificate, we used the service Let's Encrypt to get a valid web certificate for free. To do this, I remote shelled into my server and changed the Caddyfile using vi, replaced :80 (which stands for port 80) with the root domain, and two other locations with the root domain. As near as I can tell, these give the rules for what to do when someone requests something from those domains. Somehow, Caddy talked to Let's Encrypt and generated a valid web certifacte, and now HTTPS can be used for web communciation.

## HTML Notes

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
