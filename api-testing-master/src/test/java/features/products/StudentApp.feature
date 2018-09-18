@StudentAPP
Feature: Cart MicroServices

  Scenario: Find student details
    Given url 'http://localhost:8080/student/'
    When method get '/1'
    Then status 200