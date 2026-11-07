import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'
import {v4 as uuidv4} from 'uuid'

const BASEURL = 'https://conduit-api.bondaracademy.com'

const ENDPOINTS = {
    TAGS: '/api/tags',
    ARTICLES: '/api/articles',
    USERS: {
        BASE: '/api/users',
        LOGIN: '/api/users/login'
    }
}

//Await means don't move to the next line unless I get the response.
//Why? It is an asynchronous operation. 
test('GET Tags API', async ({ request }) => {
    /*
    1. I'm telling Playwright to go and make this API request. 
    2. The `await` keyword is telling Playwright to wait until the response comes back.
    3. Store this response in a constant called `tagsResponse`.

    In Postman, we get the actual JSON response, but in Playwright,
    we get an intermediate response. To get the JSON response, we have
    to convert the intermediate response to a JSON response by using a
    method called `json()`. 

    */
    const response = await request.get(BASEURL + ENDPOINTS.TAGS)

    //1. Status code validation 
    //The `status` method will only work on the intermediate response. 
    expect(response.status()).toBe(200)     //Strict equality in JavaScript 

    const body = await response.json()

    //2. Structure validation 
    //Verify that the response body has a `tags` key.
    expect(body).toHaveProperty('tags')

    //3. Data validation - Is the data in the correct format and range? 
    const { tags } = body

    expect(Array.isArray(tags)).toBe(true)
    //Check that the tags array is not empty.
    expect(tags.length).toBeGreaterThan(0)
    expect(tags.length).toBeLessThanOrEqual(10)

    //4. Content validation - Does the data contain the exact expected values or not? 
    //Check for a specific tag, for example, `GitHub` anywhere in the array.
    expect(tags).toContain('GitHub')

    //Check that the very first element([0]) of the tags array is "Test".
    expect(tags[0]).toBe('Test')
})

/*
1. Run the login API.
2. Capture that token from the login API response.
3. Use this token while calling the create article API.

*/

test('create & Delete Article API', async ({ request }) => {
    const response = await request.post(BASEURL + ENDPOINTS.USERS.LOGIN, {
        data: {
            user: {
                email: "piyushtest@test.com",
                password: "123456"
            }
        }
    })

    expect(response.status()).toBe(200)

    const body = await response.json()
    // const authToken = body.user.token
    const { token: authToken } = body.user

    // const newArticlePayload = {
    //     article: {
    //         title: Date.now(),
    //         description: "About",
    //         body: "This is the body",
    //         tagList: []
    //     }
    // }

    const newArticlePayload = {
        article: {
            // title: faker.lorem.words(3),
            title: `Automation Article ${uuidv4()}`,
            description: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            tagList: []
        }
    }    

    console.log(newArticlePayload)

    //ACTION + TYPE
    const createArticleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: newArticlePayload,
        headers: {
            authorization: `Token ${authToken}`
        }
    })

    expect(createArticleResponse.status()).toBe(201)

    const createArticleBody = await createArticleResponse.json()
    expect(createArticleBody).toHaveProperty('article')
    expect(createArticleBody.article).toHaveProperty('title')

    expect(createArticleBody.article.title).toBe(newArticlePayload.article.title)

    const getArticlesResponse = await request.get(BASEURL + ENDPOINTS.ARTICLES, {
        params: {
            limit: 10,
            offset: 0
        },
        headers: {
            authorization: `Token ${authToken}`
        }        
    })

    expect(getArticlesResponse.status()).toBe(200)
    const getArticlesBody = await getArticlesResponse.json()
    const articleID = getArticlesBody.articles[0].slug

    //Write the code to edit the article.
    //Inside this application, after editing the article, the article ID gets changed. 

    const deleteArticleResponse = await request.delete(
        `${BASEURL + ENDPOINTS.ARTICLES}/${articleID}`, {
        headers: {
            authorization: `Token ${authToken}`
        }        
    })  
    
    expect(deleteArticleResponse.status()).toBe(204)

    const getDeletedArticleResponse = await request.get(
        `${BASEURL + ENDPOINTS.ARTICLES}/${articleID}`, {
        headers: {
            authorization: `Token ${authToken}`
        }        
    })  
    
    expect(getDeletedArticleResponse.status()).toBe(404)


})

//npm install @faker-js/faker

//npm install uuid

//TODO - 