package org.example.kinopback.Controller;

import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Pojo.ActorPojo;
import org.example.kinopback.Pojo.FilmPojo;
import org.example.kinopback.Service.ActorService;
import org.example.kinopback.Service.FilmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/actors")
@CrossOrigin
public class ActorController {

  @Autowired
  private FilmsService filmsService;

  @Autowired
  private ActorService actorService;
  @GetMapping("/all")
  ResponseEntity<Object> getAllActors() {
    List<ActorPojo> actorsList = actorService.getAllActors();

    if (actorsList.isEmpty())
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    for(ActorPojo actor : actorsList) {
      System.out.println(actor);
    }

    return new ResponseEntity<>(actorsList, HttpStatus.OK);
  }

  @GetMapping()
  ResponseEntity<Object> getActorsByFilm(@RequestParam("id") String id) {

    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));

    List<Film> films= new ArrayList<>();
    films.add(FilmPojo.toEntity(filmPojo));

    List<ActorPojo> actors = actorService.getActorsByFilm(films);

   /* if (filmsList.isEmpty())
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);*/

    for(ActorPojo actor : actors) {
      System.out.println(actor);
    }

    return new ResponseEntity<>(actors, HttpStatus.OK);
  }

  @PostMapping
  ResponseEntity<Object> createOrUpdateActor(@RequestBody Actor actor) {

    ActorPojo actorPojo = actorService.createOrUpdate(actor);

    /*if (optionalProject.isEmpty()) {
      return new ResponseEntity<>("createProject", HttpStatus.BAD_REQUEST);
    }
    else*/ return new ResponseEntity<>(actorPojo, HttpStatus.valueOf(201));
  }

  @DeleteMapping
  ResponseEntity<Object> deleteActor(@RequestParam("id") String id) {
    ActorPojo actor = actorService.getActorById(Integer.parseInt(id));

    List<Actor> actors = new ArrayList<>();
    actors.add(ActorPojo.toEntity(actor));

    List<Film> films = filmsService.getFilmsByActorsWithOriginal((List<Actor>) actors);
    for (Film film : films) {
      List<Actor> newActors = new ArrayList<>();
      for(Actor act : film.getActors()) {
        if (act.getId() != actor.getId()) {
          newActors.add(act);
        }
      }
      film.setActors(newActors);
    }

    for(Film film : films) {
      filmsService.createOrUpdate(film);
    }
    System.out.println(0);
    actorService.deleteActor(ActorPojo.toEntity(actor));

    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
