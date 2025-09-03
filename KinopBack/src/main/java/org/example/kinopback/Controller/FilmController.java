package org.example.kinopback.Controller;

import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.News;
import org.example.kinopback.Pojo.ActorPojo;
import org.example.kinopback.Pojo.FilmPojo;
import org.example.kinopback.Pojo.NewsPojo;
import org.example.kinopback.Repository.ActorsRepositoryI;
import org.example.kinopback.Service.ActorService;
import org.example.kinopback.Service.FilmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/films")
@CrossOrigin
public class FilmController {

  @Autowired
  private FilmsService filmsService;

  @Autowired
  private ActorService actorService;
  @GetMapping("/all")
  ResponseEntity<Object> getAllFilms() {
    List<FilmPojo> filmsList = filmsService.getAllFilms();

    if (filmsList.isEmpty())
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    for(FilmPojo film : filmsList) {
      System.out.println(film);
    }

    return new ResponseEntity<>(filmsList, HttpStatus.OK);
  }

  @PutMapping()
  ResponseEntity<Object> addActor(@RequestBody Actor actor, @RequestParam("id") String id) {

    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));

    filmPojo = filmsService.addActorForFilm(FilmPojo.toEntity(filmPojo), actor);

    /*if (optionalProject.isEmpty()) {
      return new ResponseEntity<>("createProject", HttpStatus.BAD_REQUEST);
    }
    else*/ return new ResponseEntity<>(ActorPojo.fromEntity(actor), HttpStatus.valueOf(201));
  }
  @PostMapping
  ResponseEntity<Object> createOrUpdateFilm(@RequestBody Film film) {

    FilmPojo filmPojo = filmsService.createOrUpdate(film);

    /*if (optionalProject.isEmpty()) {
      return new ResponseEntity<>("createProject", HttpStatus.BAD_REQUEST);
    }
    else*/ return new ResponseEntity<>(filmPojo, HttpStatus.valueOf(201));
  }

  @GetMapping()
  ResponseEntity<Object> getFilmsByActor(@RequestParam("id") String id) {

    Actor actor = ActorPojo.toEntity(actorService.getActorById(Integer.parseInt(id)));
    List<Actor> actors = new ArrayList<>();

    actors.add(actor);

    List<FilmPojo> filmsList = filmsService.getFilmsByActors(actors);

    if (filmsList.isEmpty())
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    for(FilmPojo film : filmsList) {
      System.out.println(film);
    }

    return new ResponseEntity<>(filmsList, HttpStatus.OK);
  }

  @DeleteMapping
  ResponseEntity<Object> deleteFilm(@RequestParam("id") String id) {
    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));

    filmsService.deleteFilm(FilmPojo.toEntity(filmPojo));

    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

}
