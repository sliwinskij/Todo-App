package com.sliwinskij.todoappjava.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5ODM1NTI3NywiaWF0IjoxNTk3NzUwNDc3fQ.R3EJhA89cxmmlMxj-_MM0oVAE-VK52pDGSy_xoppstsJVpHLGoYWLu3bd_LAT3cYg32D40De139GYZtGL5ikpw"
//    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
