// @flow
import Resource from '../resource';
import type { APIPromise } from '../resource';
import type {
    Group,
    Member,
    DeleteGroupParams,
    GetGroupParams,
    UpdateGroupParams,
    GetGroupSubgroupsParams,
    GetGroupHierchyParams,
    GetGroupForOrganizationParams,
    CreateGroupParams,
    GetGroupMembersParams,
    AddGroupMemberParams,
    UpdateGroupMembersParams,
    RemoveGroupMemberParams,
    CloneGroupParams
} from './types';

export default class Groups extends Resource {

    /**
     * @api {delete} /v1/organizations/:organization_id/groups/:group_id delete
     * @apiGroup Groups
     * @apiName delete
     * @apiDescription Delete group. By default, child groups will be moved one level up. Optional parameter organization_id is ignored.
     * @apiParam {Number} organization_id
     * @apiParam {Number} group_id
     * @apiParam {Number} cascade
     * @apiExample {js} Example:
     *             gigwalk.groups.delete({...})
     */
    delete(params: DeleteGroupParams): APIPromise<[number]> {
        const data = {
            cascade: params.cascade
        };

        return this.client.delete(`/v1/organizations/${params.organization_id}/groups/${params.group_id}`, data);
    }

    /**
     * @api {get} /v1/organizations/:organization_id/groups/:group_id get
     * @apiGroup Groups
     * @apiName get
     * @apiDescription Get the information of a group. Optional parameter organization_id is ignored.
     * @apiParam {Number} organization_id
     * @apiParam {Number} group_id
     * @apiExample {js} Example:
     *             gigwalk.groups.get({...})
     */
    get(params: GetGroupParams): APIPromise<[Group]> {
        return this.client.get(`/v1/organizations/${params.organization_id}/groups/${params.group_id}`);
    }

    /**
     * @api {put} /v1/organizations/:organization_id/groups/:group_id update
     * @apiGroup Groups
     * @apiName update
     * @apiDescription Update group. Optional parameter organization_id is ignored.
     * @apiParam {Number} organization_id
     * @apiParam {Number} group_id
     * @apiParam {Object} group
     * @apiExample {js} Example:
     *             gigwalk.groups.update({...})
     */
    update(params: UpdateGroupParams): APIPromise<[Group]> {
        return this.client.put(`/v1/organizations/${params.organization_id}/groups/${params.group_id}`, { ...params.group });
    }

    /**
     * @api {get} /v1/groups/:group_id/sub_groups getSubgroups
     * @apiGroup Groups
     * @apiName getSubgroups
     * @apiDescription Get information about all the descendant groups of a group. All Subgroups will be fetched.
     * @apiParam {Number} group_id
     * @apiExample {js} Example:
     *             gigwalk.groups.getSubgroups({...})
     */
    getSubgroups(params: GetGroupSubgroupsParams): APIPromise<Array<Group>> {
        return this.client.get(`/v1/groups/${params.group_id}/sub_groups`);
    }

    /**
     * @api {get} /v1/group_hierarchy/:group_id getHierchy
     * @apiGroup Groups
     * @apiName getHierchy
     * @apiDescription If group_id is specified, return the hierarchy tree in which the group is present. Otherwise, return hierarchy for each group
                       the current user belongs to.
     * @apiParam {Number} group_id
     * @apiExample {js} Example:
     *             gigwalk.groups.getHierchy({...})
     */
    getHierchy(params: GetGroupHierchyParams): APIPromise<null> {
        if (params && params.group_id) return this.client.get(`/v1/group_hierarchy/${params.group_id}`);
        return this.client.get('/v1/group_hierarchy');
    }

    /**
     * @api {get} /v1/organizations/:organization_id/groups getForOrganization
     * @apiGroup Groups
     * @apiName getForOrganization
     * @apiDescription Platform admins get all groups, Admins get all groups of the organization, Workers get info about the groups they belong to.
     * @apiParam {Number} organization_id
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.groups.getForOrganization({...})
     */
    getForOrganization(params: GetGroupForOrganizationParams): APIPromise<Array<Group>> {
        const queryString = this.queryStringForSearchObject(params.query);

        return this.client.get(`/v1/organizations/${params.organization_id}/groups${queryString}`);
    }

    /**
     * @api {post} /v1/organizations/:organization_id/groups create
     * @apiGroup Groups
     * @apiName create
     * @apiDescription Create a group.
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.groups.create({...})
     */
    create(params: CreateGroupParams): APIPromise<[Group]> {
        return this.client.post(`/v1/organizations/${params.organization_id}/groups`, { ...params.group });
    }

    /**
     * @api {get} /v1/groups/:group_id/customers getMembers
     * @apiGroup Groups
     * @apiName getMembers
     * @apiDescription Return info about the customers belonging to this group. Customers of descendant groups will also be returned.
     * @apiParam {Number} group_id
     * @apiParam {Number} subgroup_members
     * @apiParam {Object} query
     * @apiExample {js} Example:
     *             gigwalk.groups.getMembers({...})
     */
    getMembers(params: GetGroupMembersParams): APIPromise<Array<Member>> {
        const queryString = this.queryStringForSearchObject(params.query);
        const data = {
            subgroup_members: params.subgroup_members
        };

        return this.client.get(`/v1/groups/${params.group_id}/customers${queryString}`, data);
    }

    /**
     * @api {post} /v1/groups/:group_id/customers addMember
     * @apiGroup Groups
     * @apiName addMember
     * @apiDescription Add a member to a group.
     * @apiParam {Number} group_id
     * @apiParam {Object} member
     * @apiExample {js} Example:
     *             gigwalk.groups.addMember({...})
     */
    addMember(params: AddGroupMemberParams): APIPromise<[number]> {
        return this.client.post(`/v1/groups/${params.group_id}/customers`, [{ ...params.member }]);
    }

    /**
     * @api {put} /v1/groups/:group_id/customers updateMembers
     * @apiGroup Groups
     * @apiName updateMembers
     * @apiDescription Used for bulk updates or bulk removes.
     * @apiParam {Number} group_id
     * @apiParam {string} action
     * @apiParam {Array<Object>} members
     * @apiExample {js} Example:
     *             gigwalk.groups.updateMembers({...})
     */
    updateMembers(params: UpdateGroupMembersParams): APIPromise<Array<number>> {
        const data = {
            memberships: params.members,
            action: params.action
        };

        return this.client.put(`/v1/groups/${params.group_id}/customers`, data);
    }

    /**
     * @api {delete} /v1/groups/:group_id/customers:customer_id removeMember
     * @apiGroup Groups
     * @apiName removeMember
     * @apiDescription Remove the given member from a group.
     * @apiParam {Number} customer_id
     * @apiParam {Number} group_id
     * @apiExample {js} Example:
     *             gigwalk.groups.removeMember({...})
     */
    removeMember(params: RemoveGroupMemberParams): APIPromise<[number]> {
        return this.client.delete(`/v1/groups/${params.group_id}/customers/${params.customer_id}`);
    }

    /**
     * @api {post} /v1/groups/:group_id/clone clone
     * @apiGroup Groups
     * @apiName clone
     * @apiDescription Clone a group and its subgroups.
     * @apiParam {Number} group_id
     * @apiParam {Number} parent_id
     * @apiParam {String} suffix
     * @apiExample {js} Example:
     *             gigwalk.groups.clone({...})
     */
    clone(params: CloneGroupParams): APIPromise<[Group]> {
        const data = {
            parent_id: params.parent_id,
            suffix: params.suffix
        };

        return this.client.post(`/v1/groups/${params.group_id}/clone`, data);
    }
}
