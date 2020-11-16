docker build -t gcr.io/$DEVSHELL_PROJECT_ID/api:1.0 .
gcloud auth configure-docker
docker push gcr.io/$DEVSHELL_PROJECT_ID/api:1.0

kubectl apply -f deployment.yml
kubectl apply -f service.yml

docker build -t gcr.io/$DEVSHELL_PROJECT_ID/web:1.0 .
gcloud auth configure-docker
docker push gcr.io/$DEVSHELL_PROJECT_ID/web:1.0

kubectl apply -f deployment.yml
kubectl apply -f service.yml

kubectl get deployments
kubectl get services
