import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  @Input() model: User = new User();
  formModel: User = new User();
  @Output() onChange = new EventEmitter();
  birthDateString: string = '';
  unfolded: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.readDate();
  }

  update(): void {
    this.userService.update(this.formModel)
      .subscribe({
        next: () => this.onChange.emit()
      });
    this.readDate();
  }

  delete(): void {
    this.userService.delete(this.model.id)
      .subscribe({
        next: () => this.onChange.emit()
      });
  }

  fold(): void {
    this.unfolded = false;
  }

  unfold(): void {
    Object.assign(this.formModel, this.model);
    this.unfolded = true;
  }

  readDate(): void {
    this.birthDateString = this.model.birthDate.toString().slice(0,10);
  }

}
