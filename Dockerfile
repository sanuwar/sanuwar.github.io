FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll
COPY . .

RUN bundle install

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
