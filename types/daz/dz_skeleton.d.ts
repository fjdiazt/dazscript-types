declare class DzSkeleton extends DzNode {
    getAllBones(): DzBone[];
    findBone(name: string): DzBone;
    getFollowTarget(): DzSkeleton;
    setFollowTarget(skeleton: DzSkeleton): void;
}