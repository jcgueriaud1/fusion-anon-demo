package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.server.connect.Endpoint;

@Endpoint
public class HelloEndpoint {

  @AnonymousAllowed
  public void hello(String world) {
    System.out.println("Hello " + world);
  }

}
