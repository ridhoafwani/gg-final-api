const InvariantError = require('../exceptions/InvariantError');
const { validatePostComment, validatePatchComment } = require('../validator/commentValidator');

class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }

    postComment = async (req, res, next) => {
        try {
            const { error } = validatePostComment(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            const newComment = await this.commentService.addComment({
                ...req.body, videoId: req.params.videoId,
            });
            res.status(201).json({
                message: 'Comment added successfully',
                data: newComment,
            });
        } catch (err) {
            next(err);
        }
    };

    getCommentsByVideoId = async (req, res, next) => {
        try {
            const comments = await this.commentService.getCommentsByVideoId(req.params.videoId);
            res.json(comments);
        } catch (err) {
            next(err);
        }
    };

    patchComment = async (req, res, next) => {
        try {
            const { error } = validatePatchComment(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            await this.commentService.updateComment(req.params.id, req.body);
            res.json({ message: 'Comment updated successfully' });
        } catch (err) {
            next(err);
        }
    };

    deleteComment = async (req, res, next) => {
        try {
            await this.commentService.deleteComment(req.params.id);
            res.json({ message: 'Comment deleted successfully' });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = CommentController;
