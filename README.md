# nginx-ua-parser

### Usage
```
yarn install
yarn start
```

in_file/access.log

```
time:2020-08-24T15:25:34+09:00  …   useragent:Mozilla/5.0 (Linux; Android 8.0.0; 702SH) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36
time:2020-08-24T15:25:34+09:00	…   useragent:Mozilla/5.0 (Linux; Android 8.0.0; 702SH) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36
time:2020-08-24T15:25:34+09:00	…   useragent:Mozilla/5.0 (iPad; CPU OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
time:2020-08-24T15:25:34+09:00  …   useragent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15
```
out_file/access.log

```
time:2020-08-24 15:25:34    …   browsername:Chrome	osname:Android	platformtype:mobile
time:2020-08-24 15:25:34    …   browsername:Chrome	osname:Android	platformtype:mobile
time:2020-08-24 15:25:34    …   browsername:Safari	osname:iOS	platformtype:tablet
time:2020-08-24 15:25:34    …   browsername:Safari	osname:macOS	platformtype:desktop
```