# # Switch-QA Project - Sprint B

## 1. Team members

The team consists of students identified in the following table.

| Student Number | Name              |
|----------------|-------------------|
| **1222637**    | Luís Afonso Moita Barros Ferreira |
| **1222649**    | Natali dos Santos Lucas |
| **1222639**    | Nuno Miguel Madaleno de Almeida Pinto  |
| **1222642**    | Ricardo Daniel Pinto Cerqueira |
| **1222643**    | Rita Isabel Santos Castro |
| **1222013**    | Paulo Jorge Fernandes Teixeira |


## 2. Task Distribution
_Throughout the project's development period, the distribution of _tasks / requirements / features_ by the team members
was carried out as described in the following table._

| Task                        | [Sprint A](/docs//sprintA/readme.md)                                                | 
|-----------------------------|--------------------------------------------------------------------------------------------
| Architecture                | [Nuno](sprintA/global-artifacts/00.architecture/architecture.md)                            | 
| Glossary                    | [Paulo](sprintA/global-artifacts/01.requirements-engineering/glossary.md)                    | 
| Use Case Diagram (UCD)      | [Nuno and Paulo](sprintA/global-artifacts/01.requirements-engineering/use-case-diagram.md)            | 
| Supplementary Specification | [Natali and Rita](sprintA/global-artifacts/01.requirements-engineering/supplementary-specification.md) | 
| us001 (Register a new account) | [Luís](sprintA/us001/readme.md)                                                   |
| us002 (Create a post) | [Natali](sprintA/us002/readme.md)                                                          |
| us003 (View posts and their data) | [Rita](sprintA/us003/readme.md)                                                        |
| us004 (Write a comment on a post) | [Ricardo](sprintA/us004/readme.md)                                              |
| us005 (View comments and their data) | [Ricardo](sprintA/us005/readme.md)                                                 |
| us006 (Reply to a comment on a post) | [Ricardo](sprintA/us006/readme.md)                                           |
| us007 (Vote on a post) | [Luís](sprintA/us007/readme.md)                                                         |
| us008 (Vote on a comment) | [Luís](sprintA/us008/readme.md)                                                            |
| us009 (Sort posts by popular or new) | [Nuno](sprintA/us009/readme.md)                                           |
| us010 (View member's profiles) | [Luís](sprintA/us010/readme.md) 
| us011 (Login) | [Rita](sprintA/us011/readme.md)  
| us012 (Logout) | [Natali](sprintA/us012/readme.md)                                                       |                                                      |


## 3. Sprints

### 3.1 Sprint B:

**Goal:** To document the API and implement API tests to the full set of functional endpoints (of the backend)

**User Story:** As a project manager, I want the team to specify (document) the API and implement API tests

The specification of the API should include for each route:
    - the action (GET, POST, etc.)
    - a small description
    - parameters
    - possible response codes and results
    - reference to related use cases and acceptance criteria

You should place the API specification in the **docs/sprintB/api** folder. Inside this folder, you should create a file for each route. The file name should be the route name, with the extension **.md**. For example, the route **/api/v1/users** should be documented in the file **docs/sprintB/api/users.md**.

The implementation of the API tests should follow the examples, as described in the root **readme** file and the code, as presented in the **src/api_test** folder
