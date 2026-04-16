# Troubleshooting

- 원본: `source/shdkej-content/Meta/Troubleshooting.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Troubleshooting**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
This page has a lot of different area's problem. \ You should search your specific trouble with `Ctrl+F`. cannot access wifi before connecting ethernet `<ip> ansible_user <> ansible_pass <password>` ``` become: true become_method: sudo ``` docker compose volume 안되는 현상 ln -s /mnt/c /c

## 원문에서 보이는 구조
- Disclaimer
- 문제해결법
- 조건을 단순하고 명확하게 정리
- 조건과 관련된 정보를 찾아 연결
- 근거없는 무엇이 개입되지 않아야 함
- 처리 완료
- jupyter notebook
- linux wifi hard blocked after suspend(lid off)

## 초기 추출
- install not working
- `pip3 install jupyter` -> jupyter notebook not working
- `sudo apt-get install jupyter-notebook` done
- ! tensorflow numpy version
- pip install "nump<<1.17"
- https://github.com/tensorflow/tensorflow/issues/30427
- `/etc/default/grub`
- `GRUB_CMDLINE_LINUX_DEFAULT="acpi_osi=! acpi_osi='Windows 2009' quiet splash"`
- `sudo grub-mkconfig -o /boot/grub/grub.cfg`
- https://www.reddit.com/r/MSILaptops/comments/8vk878/ubuntu_wifi_hardware_disabled_after_suspend/e2t1f67/

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Meta]]
