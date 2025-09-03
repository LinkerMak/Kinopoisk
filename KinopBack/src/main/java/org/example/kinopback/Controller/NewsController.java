package org.example.kinopback.Controller;

import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.News;
import org.example.kinopback.Pojo.ActorPojo;
import org.example.kinopback.Pojo.FilmPojo;
import org.example.kinopback.Pojo.NewsPojo;
import org.example.kinopback.Service.FilmsService;
import org.example.kinopback.Service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/news")
@CrossOrigin
public class NewsController {

  @Autowired
  private NewsService newsService;

  @Autowired
  private FilmsService filmsService;
  @PutMapping()
  ResponseEntity<Object> createOrUpdateNews(@RequestBody News news,@RequestParam("id") String id) {

    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));
    news.setFilm(FilmPojo.toEntity(filmPojo));

    NewsPojo newsPojo = newsService.createOrUpdate(news);

    /*if (optionalProject.isEmpty()) {
      return new ResponseEntity<>("createProject", HttpStatus.BAD_REQUEST);
    }
    else*/ return new ResponseEntity<>(filmPojo, HttpStatus.valueOf(201));
  }

  @GetMapping()
  ResponseEntity<Object> getNewsByFilm(@RequestParam("id") String id) {

    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));

    List<NewsPojo> news = newsService.getNewsByFilm(FilmPojo.toEntity(filmPojo));

   /* if (filmsList.isEmpty())
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);*/

    for(NewsPojo pojo : news) {
      System.out.println(news);
    }

    return new ResponseEntity<>(news, HttpStatus.OK);
  }
}
