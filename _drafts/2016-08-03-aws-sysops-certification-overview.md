---
layout: "post"
title: "AWS Sysops Certification: Overview"
date: "2016-08-03 12:36"
tags: [aws]
---

[Rowan Udall](http://blog.rowanudell.com/how-to-get-your-aws-sysops-associate-certification/) has an excellent post detailing what he did to study for the AWS Sysops Administrator Certification exam.  As far as I can tell, this looks to be a pretty good way to prepare for the exam so I'm going follow it.  To start things off, I'm going to read through the recommended whitepapers and post my notes here.  The first one I'll be tackling is the [Overview of Amazon Web Services](https://d0.awsstatic.com/whitepapers/aws-overview.pdf) guide which gives a more general look at what Amazon has to offer.  Lets get started!

### Cloud Computing and AWS

__What is Cloud Computing?__
Cloud Computing is the delivery of on-demand IT resources over the Internet using pay-as-you-go pricing. This involves abstracting away traditional computing resources like servers, databases, networks, and applications so that deployment is fast, easy, and reliable.  Users no longer have to worry about maintaining their own infrastructure or over/under utilization.

__Six Advantages__:
1. Trades capital expense with variable expense
2. Massive economy of scale
3. No guessing about capacity
4. Increased speed and business agility
5. Save money on hardware and datacenters
6. Fast global deployment

__Availability Zones__:
AWS resources are spread out all over the world in what are called `Availability Zones`.  These zones give customers the following benefits:
* Located all over the globe
* Completely independent of each other
* Connected via low latency links
* Multiple layers of fault tolerance

__Security & Compliance__:
Because managing the underlying IT resources falls on Amazon, security and compliance become something that is focused on from the ground up.  Amazon designs their availability zones to meet the highest quality of security and compliance standards (with some exceptions)

__Management Tools__:
1. Management Console:  The web-based frontend where you can manage your account
2. AWSCLI:  Commandline tool that can perform changes to an account (which can used for scripting)
3. API:  A programmatic interface that can be used for more involved applications and scripts

### The AWS Cloud Platform

#### Compute

__Elastic Compute Cloud (EC2)__: A web service that provides adjustable compute resources (think hypervisor for AWS virtual machines).

__Elastic Load Balancing (ELB)__:

__AWS Lambda__:

__Elastic Container Service (ECS)__:

__Elastic Beanstalk__:

#### Storage and Content Delivery

__Simple Storage Service (S3)__:

__Glacier__:

__Elastic Block Store (EBS)__:

__Elastic File System (EFS)__:

__Storage Gateway__:

__Snowball__:

__Cloudfront__:

#### Database
