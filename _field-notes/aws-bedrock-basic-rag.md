---
title: "🧠 Build Your Own RAG App Using AWS — Bedrock, Lambda, and API Gateway"
date: 2025-12-29
last_modified_at: 2025-12-29
excerpt: "Language models are frozen in time. They do not know what happened last week. RAG fixes that. Here is how I built a simple RAG app using AWS Bedrock, Lambda, and API Gateway — all serverless, all in the cloud."
header:
  teaser: /assets/images/langgraph-placeholder.jpg
  overlay_image: /assets/images/langgraph-placeholder.jpg
  overlay_filter: 0.5
  caption: "Building RAG on AWS — Bedrock, Lambda, API Gateway"
categories:
  - field-notes
  - ai-engineering
tags:
  - AWS
  - RAG
  - Bedrock
  - Lambda
  - API-Gateway
  - Cloud-AI
toc: true
toc_label: "Contents"
toc_icon: "cloud"
author_profile: true
original_author: "Sanuwar Rashid"
medium_url: "https://medium.com/@sanuwar/aws-ecosystem-basic-rag-7e5c07257e8c"
---

## The Problem: AI Does Not Know What Happened Yesterday

Language models are trained on data up to a certain date. After that, they stop learning. If you ask them about something recent — a new product, a new policy, last month's report — they either make something up or say they do not know.

This is a real problem for businesses. You cannot rely on an AI that is stuck in the past.

**RAG — Retrieval Augmented Generation — fixes this.**

Instead of relying only on what the model was trained on, RAG lets it look things up first. You give it your own documents. It searches them, finds the relevant parts, and uses that information to answer your question.

In this article, I walk through how I built a basic RAG app on AWS using Bedrock Knowledge Bases, Lambda, and API Gateway.

---

## The Architecture

Here is how the pieces connect:

```
User → API Gateway → Lambda → Bedrock Knowledge Base → OpenSearch (your documents)
```

Simple. Serverless. No servers to manage.

---

## Step 1: Why Use Bedrock Knowledge Bases?

AWS has newer features like Agents and AgentCore. But Knowledge Bases are still very useful when you want to:

- Control exactly how retrieval and generation work
- Build custom logic without a full reasoning agent
- Keep things simple and predictable

For a basic RAG setup, Knowledge Bases are the right tool.

---

## Step 2: Set Up IAM Correctly

This is the step most tutorials skip and then you get stuck.

You **cannot** create a knowledge base as the root user. You need a dedicated IAM user with the right permissions.

The user needs access to:
- `bedrock` — to create and query knowledge bases
- `s3` — to read your documents
- `iam:PassRole` — to assign roles to Bedrock

Create the user, save the credentials (console sign-in URL, username, password), and use that account for everything that follows.

---

## Step 3: Upload Your Documents to S3

Create an S3 bucket in the same region you plan to use for Bedrock. I used `us-west-2`.

Then upload the documents you want the AI to search — `.txt` or `.pdf` files both work fine.

---

## Step 4: Create the Knowledge Base in Bedrock

Go to **AWS Bedrock → Knowledge Bases** in the console.

- Point it to your S3 bucket
- Assign an IAM role
- Choose an embedding model (I used `anthropic.claude-v2`)
- Let it create an OpenSearch Serverless vector database automatically
- Hit **Sync**

That sync step is important — it reads your documents, turns them into vectors, and stores them in OpenSearch. Without it, the knowledge base has nothing to search.

---

## Step 5: Write the Lambda Function

This is the brain of the app. The Lambda function takes a question, sends it to Bedrock, and returns an answer.

```python
import boto3
import json

bedrock = boto3.client('bedrock-agent-runtime', region_name='us-west-2')

KNOWLEDGE_BASE_ID = 'your-knowledge-base-id'
MODEL_ARN = 'arn:aws:bedrock:us-west-2::foundation-model/anthropic.claude-v2'

def lambda_handler(event, context):
    body = json.loads(event.get('body', '{}'))
    question = body.get('question', '')

    response = bedrock.retrieve_and_generate(
        input={'text': question},
        retrieveAndGenerateConfiguration={
            'type': 'KNOWLEDGE_BASE',
            'knowledgeBaseConfiguration': {
                'knowledgeBaseId': KNOWLEDGE_BASE_ID,
                'modelArn': MODEL_ARN
            }
        }
    )

    answer = response['output']['text']

    return {
        'statusCode': 200,
        'body': json.dumps({'answer': answer})
    }
```

The `retrieve_and_generate()` method does all the heavy lifting — it searches your documents and generates an answer in one call.

---

## Step 6: Deploy the Lambda and Fix Permissions

Paste the code into the Lambda console and deploy.

Then update the Lambda execution role to allow:
- `bedrock:RetrieveAndGenerate`
- `bedrock:Retrieve`
- `bedrock:InvokeModel`
- `bedrock:InvokeAgent`
- CloudWatch Logs (for debugging)

Without these, Lambda cannot talk to Bedrock and you will get permission errors.

---

## Step 7: Set Up API Gateway

Create a REST API in API Gateway.

- Add a resource: `/ragquery`
- Add a POST method
- Connect it to your Lambda function
- Deploy to a stage (I used `dev`)

You will get an **invoke URL** — that is the endpoint your app will call.

---

## Step 8: Test It

Create a simple `.http` file in VS Code:

```http
POST https://your-api-id.execute-api.us-west-2.amazonaws.com/dev/ragquery
Content-Type: application/json

{
  "question": "What does the document say about quarterly results?"
}
```

Install the **REST Client** extension in VS Code and click Send. You should get back an answer based on your documents.

---

## What I Learned

**IAM is always the hard part.** Most of my time was spent getting permissions right. Get the IAM setup correct first and everything else goes smoothly.

**Serverless means you pay for what you use.** No idle servers, no fixed monthly costs. For a demo or a small internal tool, this setup is very affordable.

**Bedrock handles the hard AI parts.** You do not need to manage embeddings, vector storage, or retrieval logic yourself. AWS does it. You just point it at your documents and ask questions.

**This is production-ready.** With a few additions — caching with DynamoDB, API key security, streaming responses — this becomes something you can actually ship.

---

## What You Can Build Next

Once this basic setup works, you can extend it:

- Add **DynamoDB caching** so repeated questions are faster and cheaper
- Add **API key authentication** to control who can use it
- Add **WebSocket streaming** so answers appear word by word instead of all at once
- Connect it to a frontend so real users can interact with it

---

## Full Architecture Recap

```
User asks a question
    ↓
API Gateway receives the POST request
    ↓
Lambda runs retrieve_and_generate()
    ↓
Bedrock searches your documents in OpenSearch
    ↓
Bedrock generates an answer using Claude
    ↓
Lambda returns the answer
    ↓
User gets a response grounded in your actual documents
```

---

RAG is not complicated. The pieces already exist — you just need to connect them. AWS makes that surprisingly straightforward once you get past the IAM setup.

If you want to read the original article I published on Medium, you can find it [here](https://medium.com/@sanuwar/aws-ecosystem-basic-rag-7e5c07257e8c).
