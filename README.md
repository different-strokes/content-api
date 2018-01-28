Hydra Content API 📚
===

The Content API in the Hydra architecture will deliver all written content contained in the service for each tenant. The service requires an authenticated session for a registrered tenant, and will return content pertaining to that tenants content management solution (either a CMS, and API or other solution).

### Getting started
1. Clone the project to your laptop
2. Enter the `content-api` directory
3. Run `npm install`
4. Run `roc dev`
5. Happy coding 🤓

### Endpoints
This is an overview of the endpoint that the API is comprised of.

| Endpoint                    | Type  | Description                                       | Is restricted |
| :-------------------------- | :---: | :------------------------------------------------ | :------------ |
| `/`                         | GET   | Returns a welcome message                         | false         |
| `/status`                   | GET   | Healthcheck for monitoring                        | false         |
| `/articles`                 | GET   | Returns a list of articles                        | true          |
| `/articles/:articleId`      | GET   | Returns a specific article by its `articleId`     | true          |
| `/pages`                    | GET   | Returns a hierarchical list of pages              | true          |
| `/pages/:pageId`            | GET   | Returns a specific page by its `pageId`           | true          |
| `/tags`                     | GET   | Returns a list of tags                            | true          |
| `/tags/:tagId`              | GET   | Returns a specific tag by its `tagId`             | true          |
| `/categories`               | GET   | Returns a list of categories                      | true          |
| `/categories/:categoryId`   | GET   | Returns a specific category by its `categoryId`   | true          |
