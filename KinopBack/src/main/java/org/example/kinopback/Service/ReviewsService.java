package org.example.kinopback.Service;

import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.News;
import org.example.kinopback.Entity.Reviews;
import org.example.kinopback.Pojo.NewsPojo;
import org.example.kinopback.Pojo.ReviewsPojo;
import org.example.kinopback.Repository.ReviewsRepositoryI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.HashMap;
import java.util.List;

@Service
public class ReviewsService {

  @Autowired
  private ReviewsRepositoryI reviewsRepository;
  public ReviewsPojo createOrUpdate(Reviews review) {
    return ReviewsPojo.fromEntity(reviewsRepository.save(review));
  }

  public double getGradeFilm(Film film) {
    List<ReviewsPojo> obj = reviewsRepository.getAllByFilm(film).stream().map(ReviewsPojo::fromEntity).toList();

    int grade = 0;
    for(ReviewsPojo pojo: obj) {
      grade += pojo.getGrade();
    }

    return (double) grade/obj.size();
  }

}
