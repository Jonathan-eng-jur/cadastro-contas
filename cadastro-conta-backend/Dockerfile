FROM openjdk

WORKDIR /app

COPY target/spring-app-0.0.01-SNAPSHOT.jar /app/cadastro.jar

ENTRYPOINT ["java", "-jar", "cadastro.jar"]