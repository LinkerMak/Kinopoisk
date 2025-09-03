package org.example.kinopback.Pojo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DoublePojo {

  private double d;

  public DoublePojo(double d) {
    this.d = d;
  }

}
