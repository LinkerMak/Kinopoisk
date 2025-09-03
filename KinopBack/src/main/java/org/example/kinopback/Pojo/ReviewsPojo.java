package org.example.kinopback.Pojo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.example.kinopback.Entity.News;
import org.example.kinopback.Entity.Reviews;

@Getter
@Setter
@ToString
public class ReviewsPojo {

  private long id;
  private String text;
  private int grade;

  public static ReviewsPojo fromEntity(Reviews reviews) {
    ReviewsPojo pojo = new ReviewsPojo();
    pojo.setId(reviews.getId());
    pojo.setText(reviews.getText());
    pojo.setGrade(reviews.getGrade());

    return pojo;
  }

  public static Reviews toEntity(ReviewsPojo pojo) {
    Reviews reviews = new Reviews();
    pojo.setId(reviews.getId());
    pojo.setText(reviews.getText());
    pojo.setGrade(reviews.getGrade());

    return reviews;
  }
}
