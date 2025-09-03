package org.example.kinopback.Service;

import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.News;
import org.example.kinopback.Pojo.ActorPojo;
import org.example.kinopback.Pojo.NewsPojo;
import org.example.kinopback.Repository.FilmsRepositoryI;
import org.example.kinopback.Repository.NewsRepositoryI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

  @Autowired
  private NewsRepositoryI newsRepository;

  public NewsPojo createOrUpdate(News news) {
    return NewsPojo.fromEntity(newsRepository.save(news));
  }

  public List<NewsPojo> getNewsByFilm(Film film){
    return newsRepository.getAllByFilm(film).stream().map(NewsPojo::fromEntity).toList();
  }
}
