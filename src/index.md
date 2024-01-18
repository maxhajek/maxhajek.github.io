---
title: Hello World
layout: "base.njk"
---

Hello Boi

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}
