# Tool

- 원본: `source/shdkej-content/Fundamental/Tool.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Tool**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
``` echo -n "please input" read INPUT if [ -z $INPUT ] then ``` interactive shell - terminal console 1. /etc/profile 2. ~/.profile 3. ~/.bash_profile 4. ~/.bash_login interactive non-login shell ~/.bashrc zshrc non-interactive shell - script alt_r can't recognized. so, need change alt_r -> hangul

## 원문에서 보이는 구조
- Linux
- bash script cheatsheet
- linux environment script (startup files)
- hammerspoon 파일을 dotfile에 추가
- ubuntu korean
- kubuntu korean setting
- Linux distro
- distros

## 초기 추출
- echo with color: `GREEN='\033[0;32m'`, `NOCOLOR='\033[0m'`
- check package installed: `if ! dpkg -s $PACKAGES >/dev/null 2>&1; then`
- check command with argument: `x=''`, `if [ -z ${1+x} ] then` //$1 = first argument
- check file exist: `if [ -e <file> ] then`
- check root: `if [ "$(whoami)" != "root" ] then`
- check input:
- break when error occurred: `set -u -e`
- error occurred but prevent break: `<some command> || echo "failed"`
- allow every question: `yes | <some command>`
- write text to file: `echo <text> >> <file>`

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Fundamental]]
