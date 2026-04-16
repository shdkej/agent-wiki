# EKS_with_terraform

- 원본: `source/shdkej-content/blog/EKS_with_terraform.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **EKS_with_terraform**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
쿠버네티스 관리를 클라우드에 맡기고 쿠버네티스의 기능만 쓰게 해주는 EKS를 알아봅시다. Terraform으로 EKS를 올리면서 구성요소는 어떤 것이 있는지 확인해보려고 해요. 모듈을 사용하는 것보다 하나씩 리소스를 선언해보는게 기본 구조를 파악하기 위해 좋을 것 같아요. 수 있습니다. 첫번째 예제(terraform-provider)를 참조해서 알아보도록 하겠습니다. ``` git clone https://github.com/terraform-providers/terraform-provider-aws.git

## 원문에서 보이는 구조
- Terraform 을 이용해서 EKS 익히기
- 미리 셋팅 돼야하는 것들
- EKS의 기본 리소스
- 클러스터 생성
- providers.tf
- eks-cluster.tf
- eks-cluster.tf
- vpc.tf

## 초기 추출
- aws 계정과 credential (~/.aws/credentials)
- terraform 설치
- kubectl
- eks-cluster
- eks-worker-nodes
- vpc
- iam
- [terraform-provider](https://github.com/hashicorp/terraform-provider-aws/tree/main/examples/eks-getting-started) 에서는 테라폼이 제공해주는 소스로, 모듈 없이 뼈대를 알아볼
- [terraform-aws-modules](https://github.com/terraform-aws-modules/terraform-aws-eks/tree/master/examples/basic) 에서는 모듈로 eks를 제공해주고 있습니다.
- [terraform 공식 가이드](https://learn.hashicorp.com/tutorials/terraform/eks)

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/blog]]
