import {Component, OnInit} from '@angular/core';
import {TreeService} from '../../services/tree.service';
import {Router} from '@angular/router';
import {TreeListItem} from '../../interfaces/tree-list-item';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: TreeListItem[] = [];
  image: string ="../assets/images/NATURE.jpg";

  constructor(private treeService: TreeService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.treeService.getIndex().subscribe(
      items => this.items = items,
      error => {
     this.toastr.error('Server is unavaible! Please start the server');
      });

  }

  create() {
    this.router.navigateByUrl('create');
  }

  edit(id: number) {
    this.router.navigateByUrl('edit/' + id);
  }
  show(id:number){
    this.router.navigateByUrl('tree/'+id);
  }
  delete(id: number) {
    this.treeService.delete(id).subscribe(() => {
      this.items = this.items.filter(x => x.id !== id);
    }, error => {
      // TODO
    });
  }
}
