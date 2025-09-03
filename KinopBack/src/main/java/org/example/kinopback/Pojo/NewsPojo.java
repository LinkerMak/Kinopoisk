package org.example.kinopback.Pojo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.News;

@Getter
@Setter
@ToString
public class NewsPojo {
  private long id;
  private String description;


  public static NewsPojo fromEntity(News news) {
    NewsPojo pojo = new NewsPojo();
    pojo.setId(news.getId());
    pojo.setDescription(news.getDescription());

    return pojo;
  }

  public static News tоEntity(NewsPojo news) {
    News pojo = new News();
    pojo.setId(news.getId());
    pojo.setDescription(news.getDescription());

    return pojo;
  }
}
