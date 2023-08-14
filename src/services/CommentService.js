/* eslint-disable no-underscore-dangle */
const InvariantError = require('../exceptions/InvariantError');
const NotFoundError = require('../exceptions/NotFoundError');

class CommentService {
    constructor(commentModel, userModel) {
        this.Comment = commentModel;
        this.User = userModel;
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
            const comments = await this.Comment.find({ videoId }).populate('userId', 'name profilePictUrl', this.user).exec();

            if (!comments) {
                throw new NotFoundError('Comments not found');
            }

            const formattedComments = comments.map((comment) => ({
                _id: comment._id,
                comment: comment.comment,
                timestamp: comment.timestamp,
                user: {
                    id: comment.userId._id,
                    name: comment.userId.name,
                    profilePictUrl: comment.userId.profilePictUrl,
                },
            }));

            return formattedComments;
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
