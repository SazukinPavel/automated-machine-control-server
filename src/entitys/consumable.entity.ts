import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import Defect from './defect.entity';

@Entity({ name: 'consumables' })
class Consumable {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  name: string;

  @OneToMany(() => Defect, (defect) => defect.consumable)
  defects: Defect[];
}

export default Consumable;
