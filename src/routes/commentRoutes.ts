import express from "express";
import { commentController } from "../controllers/commentController";
import ensureEmailVerified from "../middlewares/ensureEmailVerified";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Comments
 *  description: Comment related routes
 */

/**
 * @swagger
 * /v1/comments:
 *  get:
 *   summary: Get comments with queries
 *   description: Get comments with queries
 *   tags: [Comments]
 *   parameters:
 *    - in: query
 *      name: cursor
 *      schema:
 *        type: string | undefined
 *    - in: query
 *      name: postId
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: Comments retrieved successfully
 *    500:
 *     description: Internal server error
 */
router.get("/", commentController.getCommentsWithQueries);

router.use(ensureEmailVerified);

router.post("/", commentController.createComment);

export default router;
