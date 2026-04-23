/**
 * A special type of asset that allows a product to be displayed within an assset view.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/notinstalledproductasset_dz
 */
declare class DzNotInstalledProductAsset extends DzRefCountedItem {

    /* Methods */

    /**
     * Installs the product via the cloud.
     * @since 4.11.0.193
     */
    installFromCloud(): void;

    /**
     * Loads the icon for the asset.
     */
    loadIcon(): void;
}
