# newsbias

## 1. Introduction

*What is your project and what dilemma does it aim to address.  It should outline a news dilemma and how your project will address it.*

In March 2016, the Government tabled changes to media ownership rules set out in the Broadcasting Services Act 1992 (Cth). The changes proposed to repeal the “2/3 cross media ownership” and “75% reach” rules respectively, citing a need for “traditional” platforms (Commercial Television/Radio, most Newspapers), to have greater flexibility to respond to increased pressure from “new” forms of media (i.e. online).

Although these changes do not specifically apply to online publications, they reinforce the ever-evolving landscape of media ownership in Australia. Data published by the Australian Communications and Media Authority (ACMA) show that 9 individuals hold the majority of media outlets in Australia ("'Media Interests' snapshot | ACMA", 2016). The selection of senior editorial staff is often closely managed, and accusations of bias are not uncommon given the numerous private interests the owners hold.

The data provided by the ACMA is useful, but lacks granularity and is only available from a “top-down” perspective. There is no functionality for a user who wants to interrogate a specific publication or website (i.e. search from the “bottom-up”).



## 2. Concept

*Identify the target users/audience and what makes your idea different from existing solutions.*

News Bias is a web app that will highlight ownership, key stakeholders, reach, and a crowdsourced trust rating for news web sites that users search for. 

There are two main parts to the web app: Search and Fact Check.

### 2.1 Search
Users can enter a web address (whole site or specific article) to search for the details of that news outlet.  They will be presented with ownership, key stakeholders and reach data for that news site.  A crowdsourced trust rating is also shown and users have the option to contribute to the trust rating.  If the site has no data, users can submit for it to be added to our database.

### 2.2 Fact Check
User can submit a quote and a link to an article to be fact checked by a team of vetted volunteers.  Results are displayed publically and requester is emailed. 

**Possible guidelines/parameters for fact check**
* Is the content factually correct (All aspects / most aspects / few aspects / no aspects)
* Have aspects been presented in an even and balanced manner (Both sides evenly considered / Some degree of bias / Large degree of bias)
* Is the headline reflective of the article’s content (i.e. is it clickbait?)
* How sensational is the tone (Heavily sensationalised and exaggerated / Somewhat sensationalised and exaggerated / Generally not sensationalised)

### 2.3 Strech goals
* A further breakdown of the trust rating by non-identifiable demographics, e.g. 34% conservatives vs 65% liberals find a source trustworthy.
* Chrome extension for users to check sites as they encounter them without having to navigate to a seperate site

### 2.4 Audience
Our solution is aimed at people who are interested in who owns their news and how that might affect the bias of the news they read regularly


## 3. Team

### 3.1 Individual Roles & Responsibilities

**All team members will contribute to all aspects of the assessment.**  Team roles are to facilitate the different aspects of our project and follow up with other team members on their areas of responsibility. 


Name | Details | Roles | Responsibilities
--- | --- | --- | --- 
Lilly Borchardt | <ul><li>Lilly.borchardt@gmail.com</li><li>40652218</li><li>Github: lollyborch</li><li>DECO7350</li></ul> | Team Co-ordinator | <ul><li>Keep team on track for meeting project goals</li><li>Front and back end support</li><ul>
Chris Pala | <ul><li>highwaytoacdc@gmail.com</li><li>4297656</li><li>Github: chrispala</li><li>DECO7350</li></ul> | Content and Communication | <ul><li>Writing web content for product</li><li>Coordination of team documentation (e.g. project proposal)</li><ul>
Xu Liu (Leo) | <ul><li>liuxu1992422@gmail.com</li><li>43677191</li><li>Github: leoliuxu</li><li>DECO3500</li></ul> | Design | <ul><li>Wireframing, interface design</li><li>Front end support</li><ul>
Foo Cheok Kok (Kirill) | <ul><li>kfc1346@gmail.com </li><li>43845570</li><li>Github: kirillmomo</li><li>DECO3500</li></ul> | Development | <ul><li>Front and back end</li>

Logistics including equipment, meetings, transport will be shared by all team members.  Each team member is responsible for thier own transport to workshops and meetings, and development environment. 
All of the logistic responsibilities will be equally shared to all of the team member.

### 3.2 Decision Making

Decisions will be made collaboratively.  If no consensus is reached, decisions will be voted on.  In the event of an even split, the person responsible for each section will have final say.

### 3.3 Conflict resolution

In the event of group conflict, we will:
* Admit there is a conflict that needs to be resolved
* Approach team members involved to understand problem from all perspectives
* Mediate an agreeable resolution after understanding the problem and move on if conflict is solved.
* If problem is still present, we will inform tutors to seek advice.

#### 3.3.1 Underperformance
The whole group will discuss and evaluate the underperforming person’s role, and responsibilities to possibly be reallocated. In the circumstance that members still do not participate equally after multiple discussions the course coordinator will be informed.  All team members acknowledge that this may result in individual grade being reduced.


## 4. Communications 

Our GitHub repository for storing and collaborating on code https://github.com/deco3500/newsbias

### 4.1 Meeting times and communication
We will be meeting during the workshop session (Wednesday 4pm).  In addition to the course requirement to attend, it is a group expectation that all group members will attend these every week.  Additional meetings will be scheduled as needed.

#### 4.1.1 Facebook 
A private group community has been set-up on Facebook for group communication.  This was chosen as all group members are regularly active on Facebook which allows for quick responses.  As not to rely on Facebook's 'Seen by ...' function, group members have agreed to 'Like' posts to indicate they have read and understood it.  

#### 4.1.2 Google Drive
A shared Google Drive folder has been set-up to work collaboratively on documents.  All group members already have active Google Accounts.  Using Google Drive allows multiple group members to work on documents (e.g. proposal, task list) simultaneously.

### 4.2 File naming conventions

Files will be named using descriptive terms in camel case, e.g. trustRatingController.js.  This makes files easy to asses at first glance and easy to read.


## 5. Plan

*Outline the work to be done and what will be produced as a result.*

### 5.1 Project Phases

#### 5.1.1 Research
* news ownership information available
* technical development environment

#### 5.1.2 Design
* wireframes
* UI design
* UI testing

#### 5.1.3 Construction
* front end development
* back end development

#### 5.1.4 Prototypes
Both a low and high fidelity prototype will be produced.  

##### 5.1.4.1 High Fidelity: Search
The 'Search' feature will be a high fidelity prototype that users can search news sites/articles and see results.  A database of news sites will be developed,initially with a small amount of data with a view to make this as robust as possible for final prototype. The crowd-sourced trust rating will also be functional.  We plan to use AngularJS to complete this aspect.  There will also be a form to submit sites not yet listed

##### 5.1.4.2 Low Fidelity: Fact Check
Users will be able to see how to submit article, how to become a volunteer and view sample results page. No actual volunteer fact checkers will be developed for this prototype.  

##### 5.1.4.3 Approach
We plan to use a mobile-first approach in designing and developing this web app using responsive technologies like the [W3 CSS grid layout](http://www.w3schools.com/w3css/).



### 5.2 Deliverable breakdown

Week | Due | Key Deliverable
--- | --- | ---
*Week 7* | Mon 5 Sept, Blackboard 11.59pm | Project Proposal Report (this document)
*Week 8* | Wed 14 Sept, Workshop 4-6pm | Project Prototype Interim Sprint <ul><li>presentation of research phase<ul><li>technical framework details</li><li>data gathered/available</li></ul></li><li>design update<ul><li>wireframes</li><li>UI designs</li></ul></li></ul>
*Week 9* |--- | <ul><li>continue working on design phase</li><li>start front end development </li></ul>
*Week 10* | Wed 5 Oct, Workshop 4-6pm | Project Prototype Interim Sprint <ul><li>presentation of prototype to be tested with users</li><li>detail of use case scenario</li></ul>
*Week 11* | --- | <ul><li>usability testing with users</li><li>iteration of feedback into app</li><li>continuation of front end development</li></ul>
*Week 12* | Wed 19 Oct, Workshop 4-6pm | Project Prototype Interim Sprint <ul><li>presentation of prototype</li><li>technical update on front/back end development</li><li>continue development this week</li></ul>
*Week 13* | Wed 26 Oct, Workshop 4-6pm | Final Project Prototype Presentation

### 5.3 Resources

* Team member time & skills
* Web hosting for app
* Development environment
 

## 6. Tags

### 6.1 Social and Mobile
* tag1
* tag2
* tag3
* tag4
* tag5

### 6.2 Journalism and News

* Bias
* tag2

## 7. Bibliography

*'Media Interests' snapshot | ACMA*. (2016). *Acma.gov.au*. Retrieved 4 September 2016, from http://acma.gov.au/theACMA/media-interests-snapshot


