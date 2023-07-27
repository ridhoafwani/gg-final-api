const InvariantError = require('../exceptions/InvariantError');
const NotFoundError = require('../exceptions/NotFoundError');

class CommentService {
    constructor(commentModel) {
        this.Comment = commentModel;
    }

    addComment = async (comment) => {
        try {
            const newComment = new this.Comment(comment);
            const result = await newComment.save();
            return result;
        } catch (err) {
            throw new InvariantError(err.message);
        }
    };

    getCommentsByVideoId = async (videoId) => {
        try {
            const result = await this.Comment.find({ videoId });
            if (!result) {
                throw new NotFoundError('Comments not found');
            }
            return result;
        } catch (err) {
            throw new InvariantError(err.message);
        }
    };

    updateComment = async (id, comment) => {
        try {
            await this.Comment.findByIdAndUpdate(id, comment);
        } catch (err) {
            throw new NotFoundError('Comment not found');
        }
    };

    deleteComment = async (id) => {
        try {
            await this.Comment.findByIdAndDelete(id);
        } catch (err) {
            throw new NotFoundError('Comment not found');
        }
    };
}

module.exports = CommentService;
