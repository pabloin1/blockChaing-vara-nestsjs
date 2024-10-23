-- AlterTable
ALTER TABLE `user` ADD COLUMN `wallet` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `id_organization` INTEGER NOT NULL,
    `id_Type_Event` INTEGER NOT NULL,

    UNIQUE INDEX `Event_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type_Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Type_Event_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Organization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Organization_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Skill_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `rating` DOUBLE NOT NULL,
    `lesson` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `skill_level` VARCHAR(191) NOT NULL,
    `enrolled` DOUBLE NOT NULL,
    `articles` INTEGER NOT NULL,
    `downloads` INTEGER NOT NULL,
    `id_organization` INTEGER NOT NULL,

    UNIQUE INDEX `Certificate_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CertificateSkill` (
    `certificateId` INTEGER NOT NULL,
    `skillId` INTEGER NOT NULL,

    PRIMARY KEY (`certificateId`, `skillId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_id_organization_fkey` FOREIGN KEY (`id_organization`) REFERENCES `Organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_id_Type_Event_fkey` FOREIGN KEY (`id_Type_Event`) REFERENCES `Type_Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificate` ADD CONSTRAINT `Certificate_id_organization_fkey` FOREIGN KEY (`id_organization`) REFERENCES `Organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CertificateSkill` ADD CONSTRAINT `CertificateSkill_certificateId_fkey` FOREIGN KEY (`certificateId`) REFERENCES `Certificate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CertificateSkill` ADD CONSTRAINT `CertificateSkill_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
