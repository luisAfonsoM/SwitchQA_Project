# Supplementary Specification (FURPS+)

## 1. Introduction

- This document aims to review an existing online web application (DDD Forum) whose purpose is to provide a platform for online communities and discussions on a wide range of topics where registered members can submit content, such as text posts and links, and engage in discussions through comments and votes.

## 1.1 Intended Audience

- DDD Forum is an online platform that aims to attract a diverse range of users. The intended audience can vary depending on the content being shared.

## 1.2 References

- The following webpages and books were used as references in the process of writting this document:

  - Nielsen, J. (1993). Usability Engineering. Chapter 5: "Three Important Limits."
  - Microsoft. (2022). Best Practices for Application Start Time.
  - Oracle. (Year unavailable). What is disaster recovery?

## 2. Functionality

_Specifies functionalities that: are common across several US/UC; are not related to US/UC, namely: Audit, Reporting and Security._

- Members must be able to log in securely using their username and password. The login process verifies their identity and allows access only to those with valid credentials.

- The system needs a strong authentication method to ensure secure logins. This should include measures like encrypting passwords.

- Members must have the ability to create posts with text or links. They must also be able to participate in discussions by commenting on posts and voting on content.

- There must be a way for visitors and members to sort posts in their preferred order on the feed, either by recency or popularity.

## 3. Usability

_Evaluates the user interface. It has several subcategories, among them: error prevention; interface aesthetics and design; help and documentation; consistency and standards._

- Notifications should be clear and helpful when there's an error or problem. Their purpose is to communicate the problem and provide suggestions for resolving the issue.

- The Forum should be easy to use with a user-friendly layout and responsive design to allow effortless navigation and interaction. It should also feature clear call-to-action buttons and minimize effort for both visitors and members.

- Accessibility for visitors with disabilities should be prioritized by incorporating a clear and high-contrast design, primarily text-based content, and supporting keyboard navigation.

- A comprehensive Help Center should be created, providing detailed information and guidance on the platform's features and functionalities for both visitors and members.

## 4. Reliability

_Refers to the integrity, compliance and interoperability of the software. The requirements to be considered are: frequency and severity of failure, possibility of recovery, possibility of prediction, accuracy, average time between failures._

- The Forum must properly handle errors and exceptions to ensure the stability of the web application.

- There should be regular backups of the data and a disaster recovery measures plan should be implemented in case of system failures to minimize interruptions and limit damages.

- The Forum must be an accurate and reliable platform in which input data remains unchanged and retains its intended meaning.

## 5. Performance

_Evaluates the performance requirements of the software, namely: response time, start-up time, recovery time, memory consumption, CPU usage, load capacity and application availability._

- The interface prioritizes responsiveness, ensuring fast loading times and smooth interactions for an optimal user experience. The limit for the user to feel the Forum is reacting instantaneously is 0.1 seconds, and 1.0 second will be the maximum waiting time since it already makes the user notice the delay.

- The Forum should aim to have a startup time within a few seconds to provide a smooth user experience.

- Regarding recovery time, for critical failures, the goal is to recover as quickly as possible, within minutes or even seconds, and for less critical failures, recovery may take longer, such as several minutes or hours.

## 6. Supportability

_The supportability requirements gathers several characteristics, such as: testability, adaptability, maintainability, compatibility, configurability, installability, scalability and more._

- By creating clear and well-defined requirements, the testability of the Forum should be enhanced. Expected behavior and functionalities are documented to ensure that test designs cover all aspects of the application.

- Comprehensive documentation should be provided to developers and quality assurance teams to aid in understanding, operating, and maintaining the Forum.

- The Forum must handle a growing number of users and posts without significant performance degradation.

- The Forum must be compatible with commonly used web browsers such as Firefox, Google Chrome, Safari, Internet Explorer, and Opera.


## 7. Plus

### 7.1 Design Constraints

_Specifies or constraints the system design process. Examples may include: programming languages, software process, mandatory standards/patterns, use of development tools, class library, etc._

- The Forum should be implemented using TypeScript, Sass, JavaScript, HTML, Shell script, Batch file, and other compatible languages.

- The development and quality assurance of the Forum should follow an Agile software development process.

- The Forum must have a client-server web application architecture, which is divided into two main components: the client and the server. The client refers to the front-end of the application, which is accessed through a web browser. The server, on the other hand, handles the processing, storage, and retrieval of data. The client and server communicate with each other over the internet.

- The development and quality assurance team should use Git for version control and collaboration.

### 7.2 Implementation Constraints

_Specifies or constraints the code or construction of a system such such as: mandatory standards/patterns, implementation languages, database integrity, resource limits, operating system._

- The Forum should be implemented using HTML, Sass, JavaScript and Typecript for the front-end, and Shell script and Batch file for the back-end.

- To ensure the reliability and consistency of data, MySQL is incorporated as a relational database management system. The database utilizes the powerful Sequelize library, which seamlessly generates syntax in CHAR36 encoding. This allows for efficient storage and retrieval of alphanumeric data, leveraging a character set consisting of digits (0-9) and uppercase letters (A-Z). Additionally, to ensure robust security measures, the database employs the SHA-512 cryptographic hash function, providing a highly secure mechanism for generating hash values.
Tests run independently from the database, focusing solely on verifying the functionality and correctness of the code. 

- The Forum must work efficiently within the limitations of it's hosting environment.

- The Forum must be able to run on Windows, macOS, Linux, Android and IOS.

### 7.3 Interface Constraints

_Specifies or constraints the features inherent to the interaction of the system being developed with other external systems._

- The Forum's interface should be easy to understand and navigate, work well on different devices and screen sizes, and be accessible for users with disabilities. By focusing on these aspects, we can create a good user experience that promotes engagement, lowers bounce rates, and increases user satisfaction and retention.

### 7.4 Physical Constraints

_Specifies a limitation or physical requirement regarding the hardware used to house the system, as for example: material, shape, size or weight._

- The Forum must be designed to run on standard hardware, commonly utilized for web hosting, such as any device with a processor, ram memory, storage, a display and internet connectivity (desktop, laptop, tablet or smartphone).
