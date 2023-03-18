vcl 4.1;

backend default {
  .host = "host.docker.internal";
  .port = "7070";
  .connect_timeout = 5s;
  .first_byte_timeout = 10s;
  .between_bytes_timeout = 10s;
}