declare class DzSkinBinding extends DzModifier {
    findBoneBinding(name: string): DzBoneBinding;
    addBoneBinding(boneBinding: DzBoneBinding): void;
}