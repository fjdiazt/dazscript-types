declare class DzSystem {
    getenv(environmentVariable: QString): QString
    print(expression: QString): void
    println(expression: QString): void
    setenv(environmentVariable: QString, value: QString): void
}