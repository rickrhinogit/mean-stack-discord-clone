const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../socketHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    // remove that invitation from friend invitations collection
    const invitationExists = await FriendInvitation.exists({
      _id: id,
    });

    if (invitationExists) {
      await FriendInvitation.findByIdAndDelete(id);
    }

    // update pending invitations
    friendsUpdates.updateFriendsPendingInvitations(userId);

    return res.status(200).send("Invitation successfully rejected");
  } catch (err) {
    console.log();
  }

  return res.send("Reject handler");
};

module.exports = postReject;
