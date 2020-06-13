FROM python:3.8.0-alpine

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

ADD ./src/requirements.txt /usr/src/app/requirements.txt

RUN python3 -m pip install -r /usr/src/app/requirements.txt

ENTRYPOINT ["flask", "run", "--host", "0.0.0.0"]
