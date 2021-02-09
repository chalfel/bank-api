VERSION=$1 
docker build -t chalfel/ts-express-boilerplate:$VERSION . && \
docker push chalfel/ts-express-boilerplate:$VERSION
