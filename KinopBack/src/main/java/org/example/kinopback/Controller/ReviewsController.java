package org.example.kinopback.Controller;

import org.example.kinopback.Entity.News;
import org.example.kinopback.Entity.Reviews;
import org.example.kinopback.Pojo.DoublePojo;
import org.example.kinopback.Pojo.FilmPojo;
import org.example.kinopback.Pojo.NewsPojo;
import org.example.kinopback.Pojo.ReviewsPojo;
import org.example.kinopback.Service.FilmsService;
import org.example.kinopback.Service.NewsService;
import org.example.kinopback.Service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/reviews")
@CrossOrigin
public class ReviewsController {

  @Autowired
  private ReviewsService reviewsService;

  @Autowired
  private FilmsService filmsService;

  @PutMapping()
  ResponseEntity<Object> createOrUpdateNews(@RequestBody Reviews review, @RequestParam("id") String id) {

    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));
    review.setFilm(FilmPojo.toEntity(filmPojo));

    ReviewsPojo reviewsPojo = reviewsService.createOrUpdate(review);

    /*if (optionalProject.isEmpty()) {
      return new ResponseEntity<>("createProject", HttpStatus.BAD_REQUEST);
    }
    else*/
    return new ResponseEntity<>(reviewsPojo, HttpStatus.valueOf(201));
  }

  @GetMapping
  ResponseEntity<Object> getGradeFilm(@RequestParam("id") String id) {
    FilmPojo filmPojo = filmsService.getFilmById(Integer.parseInt(id));

    DoublePojo grade = new DoublePojo(reviewsService.getGradeFilm(FilmPojo.toEntity(filmPojo)));

    System.out.println(grade);
    return new ResponseEntity<>(grade, HttpStatus.valueOf(201));
  }
}
