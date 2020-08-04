# nginx-ua-parser

### Usage
```
yarn install
yarn start
```

in_file/access.log

```
time:2020-08-03T14:26:05+09:00	remote_addr:1.1.1.1	request_method:GET	request_length:1388	request_uri:/hoge/fuga	https:	uri:/index.php	query_string:	status:200	bytes_sent:31224	body_bytes_sent:30819	referer:https://hoge/fuga/	useragent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36	forwardedfor:1.1.1.1	request_time:0.530	upstream_response_time:0.532	

```
out_file/access.log

```
time:2020-08-03T14:26:05+09:00	remote_addr:1.1.1.1	request_method:GET	request_length:1388	request_uri:/hoge/fuga	https:	uri:/index.php	query_string:	status:200	bytes_sent:31224	body_bytes_sent:30819	referer:https://hoge/fuga/	useragent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36	forwardedfor:1.1.1.1	request_time:0.530	upstream_response_time:0.532	browsername:Chrome	osname:macOS	platformtype:desktop
```