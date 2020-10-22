# README

This README is for MPSS Promotion Chatbot App.

### What is this repository for?

- MPSS Promotion Chatbot App.
- 0.1

### How do I get set up?

- [README](#readme)
  - [What is this repository for?](#what-is-this-repository-for)
  - [How do I get set up?](#how-do-i-get-set-up)
    - [Summary of set up](#summary-of-set-up)
    - [Configuration](#configuration)
    - [Dependencies](#dependencies)
    - [Database Configuration](#database-configuration)
      - [**Admin Table**](#admin-table)
      - [**User Table**](#user-table)
      - [**Event Table**](#event-table)
      - [**Merchant Table**](#merchant-table)
      - [**Transaction Table**](#transaction-table)
    - [How to run tests](#how-to-run-tests)
    - [Deployment instructions](#deployment-instructions)
  - [Contribution guidelines](#contribution-guidelines)
  - [Who do I talk to?](#who-do-i-talk-to)

#### Summary of set up

#### Configuration

#### Dependencies

#### Database Configuration

> There are five tables use in the project.
>
> 1.  Admin
> 2.  User
> 3.  Event
> 4.  Merchant
> 5.  Transaction

##### **Admin Table**

| Column Name | Data Type | Length | Mandatory/Optional | Key     | NULL? | DEFAULT |
| ----------- | --------- | ------ | ------------------ | ------- | ----- | ------- |
| ID          | VARCHAR   | 20     | MANDATORY          | PRIMARY |
| USERNAME    | VARCHAR   | 255    | MANDATORY          |         |
| PASSWORD    | VARCHAR   | 255    | MANDATORY          |         |
| EMAIL       | VARCHAR   | 255    | MANDATORY          |         |

##### **User Table**

| Column Name  | Data Type | Length | Mandatory/Optional | Key     | NULL? | DEFAULT |
| ------------ | --------- | ------ | ------------------ | ------- | ----- | ------- |
| USER_ID      | VARCHAR   | 20     | MANDATORY          | PRIMARY |
| USERNAME     | VARCHAR   | 255    | MANDATORY          |         |
| REGION       | VARCHAR   | 255    | MANDATORY          |         |
| TOWNSHIP     | VARCHAR   | 255    | MANDATORY          |         |
| GENDER       | VARCHAR   | 60     | MANDATORY          |         |
| PHONE_NUMBER | VARCHAR   | 20     | MANDATORY          |         |

##### **Event Table**

| Column Name | Data Type | Length | Mandatory/Optional | Key     | NULL? | DEFAULT      |
| ----------- | --------- | ------ | ------------------ | ------- | ----- | ------------ |
| EVENT_ID    | VARCHAR   | 20     | MANDATORY          | PRIMARY | NO    | SERIAL       |
| EVENT_NAME  | VARCHAR   | 255    | MANDATORY          |         | NO    |              |
| MERCHANT_ID | VARCHAR   | 20     | MANDATORY          | FOREIGN | NO    |              |
| START_DATE  | DATE      |        | MANDATORY          |         | NO    | CURRENT DATE |
| END_DATE    | DATE      |        | MANDATORY          |         | NO    | CURRENT DATE |
| STATUS      | BOOLEAN   |        | MANDATORY          |         | NO    | TRUE         |

##### **Merchant Table**

| Column Name           | Data Type | Length | Mandatory/Optional | Key     | NULL? | DEFAULT |
| --------------------- | --------- | ------ | ------------------ | ------- | ----- | ------- |
| MERCHANT_ID           | VARCHAR   | 20     | MANDATORY          | PRIMARY | NO    |         | SERIAL |
| MERCHANT_NAME         | VARCHAR   | 255    | MANDATORY          |         | NO    |         |
| MERCHANT_EMAIL        | VARCHAR   | 255    | MANDATORY          |         | NO    |         |
| MERCHANT_PHONE_NUMBER | VARCHAR   | 20     | MANDATORY          |         | NO    |         |
| APIKEY                | VARCHAR   | 255    | MANDATORY          |         | NO    |         |
| ORG_KEY               | VARCHAR   | 255    | MANDATORY          |         | NO    |         |
| ADDRESS               | TEXT      |        | MANDATORY          |         | NO    |         |
| STATUS                | BOOLEAN   |        | MANDATORY          |         | NO    | TRUE    |

##### **Transaction Table**

| Column Name     | Data Type | Length | Mandatory/Optional | Key     | NULL? | DEFAULT |
| --------------- | --------- | ------ | ------------------ | ------- | ----- | ------- |
| TRANS_ID        | VARCHAR   | 20     | MANDATORY          | PRIMARY | NO    |         | SERIAL |
| USER_ID         | VARCHAR   | 20     | MANDATORY          | FOREIGN | NO    |         |
| MERCHANT_ID     | VARCHAR   | 20     | MANDATORY          | FOREIGN | NO    |         |
| EVENT_ID        | VARCHAR   | 20     | MANDATORY          | FOREIGN | NO    |         |
| TRANS_DATE      | DATE      |        | MANDATORY          |         | NO    |         |
| PIN_CODE_NUMBER | VARCHAR   | 255    | MANDATORY          |         | NO    |         |
| ITEM_TYPE       | VARCHAR   |        | MANDATORY          |         | NO    |         |
| TOPUP_AMOUNT    | VARCHAR   |        | MANDATORY          |         | NO    |         |
| STATUS          | BOOLEAN   |        | MANDATORY          |         | NO    | TRUE    |

#### How to run tests

#### Deployment instructions

### Contribution guidelines

- Writing tests
- Code review
- Other guidelines

### Who do I talk to?

- Repo owner or admin
- Other community or team contact
